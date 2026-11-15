export function buildGmailComposeLink(
  email: string,
  subject?: string
): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: email.trim(),
  });

  if (subject && subject.trim()) {
    params.set('su', subject.trim());
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
