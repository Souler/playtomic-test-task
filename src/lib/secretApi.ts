function blobToBase64(blob: Blob) {
  return new Promise((resolve) => {
    var reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result as string;
      const base64 = dataUrl.split(',')[1];
      resolve(base64);
    };
    reader.readAsDataURL(blob);
  })
}

function SecretApi() {
  return {
    async fetchRandomString() {
      const res = await fetch('https://httpbin.org/bytes/20');
      const binary = await res.blob();
      return blobToBase64(binary);
    }
  };
}

export default SecretApi()