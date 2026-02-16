function generateMeta() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;
  const author = document.getElementById("author").value;
  const datePublished = document.getElementById("datePublished").value;
  const dateModified = document.getElementById("dateModified").value;
  const ratingValue = document.getElementById("ratingValue").value;
  const ratingCount = document.getElementById("ratingCount").value;

  const metaTags = `
<!-- SEO Meta -->
<meta name="description" content="${description}">
<meta name="keywords" content="${title}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${image}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">

<!-- JSON-LD BlogPosting + Rating -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "${title}",
  "description": "${description}",
  "image": "${image}",
  "author": {"@type": "Person","name": "${author}"},
  "datePublished": "${datePublished}",
  "dateModified": "${dateModified}",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "${ratingValue}",
    "ratingCount": "${ratingCount}"
  }
}
</script>
`;

  document.getElementById("output").value = metaTags;
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();
  navigator.clipboard.writeText(output.value).then(() => {
    alert("Output berhasil disalin!");
  });
}
