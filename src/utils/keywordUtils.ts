export function pickRandomKeywords(keywords: string[], count?: number): string[] {
  let n = count;
  if (!n) {
    n = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5
  }
  const shuffled = [...keywords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
} 