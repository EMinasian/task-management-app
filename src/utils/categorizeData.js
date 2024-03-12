export default function categorizeData(data) {
  const categorized = [];

  data.forEach((task) => {
    const category = task.stage - 1;
    if (
      categorized[category] === undefined ||
      categorized[category].length === 0
    ) {
      categorized[category] = [task];
    } else {
      categorized[category].push(task);
    }
  });

  return categorized;
}
