export function grpInitials(grpName) {
  if (!grpName || typeof grpName !== "string") {
    console.log(grpName + " " + " is invalid group name");
  }

  const words = grpName.trim().split(/\s+/);

  let intials;
  if (words.length === 1) {
    intials = words[0].charAt(0).toUpperCase();
  } else {
    intials =
      words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
  }
  return intials;
}
