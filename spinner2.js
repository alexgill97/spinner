let timeout = 100
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for (const el of spinner) {
  setTimeout(() => {
    process.stdout.write(el)
  }, timeout)
  timeout += 200
}

