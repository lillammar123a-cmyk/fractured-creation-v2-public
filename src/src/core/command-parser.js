export function parseCommand(message, prefix = ".") {
  if (typeof message !== "string") {
    return null;
  }

  const content = message.trim();

  if (!content.startsWith(prefix)) {
    return null;
  }

  const parts = content
    .slice(prefix.length)
    .trim()
    .split(/\s+/);

  const command = parts.shift()?.toLowerCase();

  if (!command) {
    return null;
  }

  return {
    command,
    args: parts,
  };
}