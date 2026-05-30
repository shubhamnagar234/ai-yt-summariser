'use server';

import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { createSession, deleteSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export async function signUpAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('fullName') as string;

  if (!email || !password || !fullName) {
    return { error: 'All fields are required' };
  }

  try {
    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      return { error: 'User with this email already exists' };
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const [newUser] = await db
      .insert(users)
      .values({
        email,
        fullName,
        passwordHash,
      })
      .returning();

    // Directly create session (skipping email verification as requested)
    await createSession(newUser.id);
  } catch (err: any) {
    console.error('Sign up error', err);
    return { error: 'Something went wrong during sign up' };
  }

  redirect('/dashboard');
}

export async function signInAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user || !user.passwordHash) {
      return { error: 'Invalid email or password' };
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return { error: 'Invalid email or password' };
    }

    await createSession(user.id);
  } catch (err) {
    console.error('Sign in error', err);
    return { error: 'Something went wrong during sign in' };
  }

  redirect('/dashboard');
}

export async function signOutAction() {
  await deleteSession();
  redirect('/');
}
