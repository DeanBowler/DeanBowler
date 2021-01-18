export function downloadBlob(blob: Blob, filename: string) {
  const fileUrl = URL.createObjectURL(blob);

  const fileLink = document.createElement('a');
  fileLink.href = fileUrl;
  fileLink.download = filename;
  fileLink.click();
}
