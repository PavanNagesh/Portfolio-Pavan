import { useEffect, useState } from "react";
import {
  fetchGithubContributions,
  getGithubUsername,
  type GithubContribution,
} from "@/lib/github";
import { personalInfo } from "@/data/personal";

export function useGithubContributions() {
  const [data, setData] = useState<GithubContribution[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = getGithubUsername(personalInfo.github);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchGithubContributions(username);
      setData(result.contributions);
      const yearTotal = result.total
        ? Object.values(result.total).reduce((sum, n) => sum + n, 0)
        : result.contributions.reduce((sum, d) => sum + d.count, 0);
      setTotal(yearTotal);
    } catch {
      setError("Unable to load contribution data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [username]);

  return { data, total, loading, error, username, retry: load };
}
