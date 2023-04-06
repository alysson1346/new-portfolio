import { Button } from "../button";

export const DownloadButton = ({ filename, url }) => {
  const handleDownload = async () => {
    const response = await fetch(url);
    const blob = await response.blob();
    const href = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button color="btn1" onClick={handleDownload}>
      Baixar {filename}
    </Button>
  );
};
