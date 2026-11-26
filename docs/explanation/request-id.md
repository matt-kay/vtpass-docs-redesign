---
sidebar_position: 1
---

# Request ID
This document explains the recommended format of generating a request ID.

## What's a request ID?
This is a unique identifier with which you can use to identify and query the status of a given transaction.

## The format
The request ID should be a string in the Unix format `YYYYMMDDHHII`.
It must contain today’s date + current hour and minute, for example: `202201301610`.
If desired, you can add an  alphanumeric string as suffix, for example: `202201301610ad8ef08acd8fc0f` or `2022013016104738492849`.

:::note

A Valid request ID have the following:
- Must be 12 characters or more
- First 12 characters must be numeric
- First 12 characters must comprise of today's date
- Date and Time should be in Africa/Lagos Timezone or Greenwich Mean Time (GMT) +1

:::

## Example
Here is a JavaScript function that generates the Request ID specifically formatted for the Africa/Lagos / Greenwich Mean Time (GMT)+1 timezone, ensuring 12+ characters with a numeric date/time prefix, plus an optional alphanumeric suffix:
```jsx showLineNumbers title="/src/utils.js"
/**
 * Generates a Request ID formatted as YYYYMMDDHHMM + optional alphanumeric suffix
 * Timezone is strictly locked to Africa/Lagos (GMT+1).
 * 
 * @param {number} suffixLength - Length of random alphanumeric string to append (default: 10)
 * @returns {string} Formatted Request ID (e.g., "202611260906aB9x2LmQ4z")
 */
function generateRequestId(suffixLength = 10) {
  const now = new Date();

  // Extract date and time parts specifically in the Africa/Lagos timezone
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  // Map the formatted parts into an easily accessible object
  const parts = formatter.formatToParts(now).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});

  // Handle edge case where midnight might format as "24" instead of "00"
  const hour = parts.hour === '24' ? '00' : parts.hour;

  // First 12 numeric characters: YYYYMMDDHHII
  const datePrefix = `${parts.year}${parts.month}${parts.day}${hour}${parts.minute}`;

  // Generate random alphanumeric suffix to ensure uniqueness
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomSuffix = '';
  for (let i = 0; i < suffixLength; i++) {
    randomSuffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `${datePrefix}${randomSuffix}`;
}

// --- Usage Examples ---
console.log(generateRequestId());    // Output: e.g., "202611260906YUs83meikd" (22 chars)
console.log(generateRequestId(0));   // Output: e.g., "202611260906" (Minimum 12 chars)
console.log(generateRequestId(15));  // Output: e.g., "202611260906ad8ef08acd8fc0f" (27 chars)
```
