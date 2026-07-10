export interface GithubContribution {
  date: string;
  count: number;
  level: number;
}

export interface GithubContributionsResponse {
  contributions: GithubContribution[];
  total?: Record<string, number>;
}

export function getGithubUsername(githubUrl: string): string {
  return githubUrl.replace(/\/$/, "").split("/").pop() ?? "";
}

export async function fetchGithubContributions(
  username: string
): Promise<GithubContributionsResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub contributions");
  }

  return response.json();
}
