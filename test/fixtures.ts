const singleImageTests = [
  {
    name: 'Single Image with Caption',
    input:
      '![A description of the image](https://example.com/image.png "An image title")',
    options: {},
    expected:
      '<figure><div><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></div></figure>',
  },
  {
    name: 'Single Image without Caption',
    input: '![A description of the image](https://example.com/image.png)',
    options: {},
    expected:
      '<figure><div><img alt="A description of the image" src="https://example.com/image.png"></div></figure>',
  },
]

const multipleImagesTests = [
  {
    name: 'Multiple Images with Captions',
    input:
      '![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](https://example.com/image2.png "Image Title 2")',
    options: {},
    expected:
      '<figure><div><figure><img alt="Image 1 description" src="https://example.com/image1.png"><figcaption>Image Title 1</figcaption></figure><figure><img alt="Image 2 description" src="https://example.com/image2.png"><figcaption>Image Title 2</figcaption></figure></div></figure>',
  },
  {
    name: 'Multiple Images without Captions',
    input:
      '![Image 1 description](https://example.com/image1.png)![Image 2 description](https://example.com/image2.png)',
    options: {},
    expected:
      '<figure><div><img alt="Image 1 description" src="https://example.com/image1.png"><img alt="Image 2 description" src="https://example.com/image2.png"></div></figure>',
  },
  {
    name: 'Multiple Images with Shared Caption',
    input:
      '![Image 1 description](https://example.com/image1.png "This becomes the caption")![Image 2 description](https://example.com/image2.png)',
    options: {},
    expected:
      '<figure><div><img alt="Image 1 description" src="https://example.com/image1.png"><img alt="Image 2 description" src="https://example.com/image2.png"></div><figcaption>This becomes the caption</figcaption></figure>',
  },
]

const singleImageLinkTests = [
  {
    name: 'Single Image Link (Link Caption, Image Caption)',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'Single Image Link (Link Caption, No Image Caption)',
    input:
      '[![A description of the image](https://example.com/image.png)](https://example.com/ "A link title")',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><img alt="A description of the image" src="https://example.com/image.png"></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'Single Image Link (No Link Caption, Image Caption)',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/)',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></a></figure>',
  },
  {
    name: 'Single Image Link (No Link Caption, No Image Caption)',
    input:
      '[![A description of the image](https://example.com/image.png)](https://example.com/)',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><img alt="A description of the image" src="https://example.com/image.png"></a></figure>',
  },
]

const multipleImageLinkTests = [
  // Multiple Image Link
  {
    name: 'Multiple Image Link (Link Caption, Image Captions)',
    input:
      '[![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](https://example.com/image2.png "Image Title 2")](https://example.com/ "A link title")',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="Image 1 description" src="https://example.com/image1.png"><figcaption>Image Title 1</figcaption></figure><figure><img alt="Image 2 description" src="https://example.com/image2.png"><figcaption>Image Title 2</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'Multiple Image Link (Link Caption, No Image Captions)',
    input:
      '[![Image 1 description](https://example.com/image1.png)![Image 2 description](https://example.com/image2.png)](https://example.com/ "A link title")',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><img alt="Image 1 description" src="https://example.com/image1.png"><img alt="Image 2 description" src="https://example.com/image2.png"></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'Multiple Image Link (No Link Caption, Image Captions)',
    input:
      '[![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](https://example.com/image2.png "Image Title 2")](https://example.com/)',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="Image 1 description" src="https://example.com/image1.png"><figcaption>Image Title 1</figcaption></figure><figure><img alt="Image 2 description" src="https://example.com/image2.png"><figcaption>Image Title 2</figcaption></figure></a></figure>',
  },
  {
    name: 'Multiple Image Link (No Link Caption, No Image Captions)',
    input:
      '[![Image 1 description](https://example.com/image1.png)![Image 2 description](https://example.com/image2.png)](https://example.com/)',
    options: {},
    expected:
      '<figure><a href="https://example.com/"><img alt="Image 1 description" src="https://example.com/image1.png"><img alt="Image 2 description" src="https://example.com/image2.png"></a></figure>',
  },
]

const attributesTests = [
  {
    name: 'className (Image)',
    input:
      '![A description of the image](https://example.com/image.png "An image title")',
    options: { className: 'image-caption' },
    expected:
      '<figure class="image-caption"><div><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></div></figure>',
  },
  {
    name: 'className (Image Link)',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")',
    options: { className: 'image-caption' },
    expected:
      '<figure class="image-caption"><a href="https://example.com/"><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'lazyLoad (Image)',
    input:
      '![A description of the image](https://example.com/image.png "An image title")',
    options: { lazyLoad: true },
    expected:
      '<figure><div><figure><img alt="A description of the image" src="https://example.com/image.png" loading="lazy"><figcaption>An image title</figcaption></figure></div></figure>',
  },
  {
    name: 'lazyLoad (Image Link)',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")',
    options: { lazyLoad: true },
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="A description of the image" src="https://example.com/image.png" loading="lazy"><figcaption>An image title</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'linkAttributes',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")',
    options: { linkAttributes: { target: '_blank', rel: 'noreferrer' } },
    expected:
      '<figure><a href="https://example.com/" target="_blank" rel="noreferrer"><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
]

const excludedPathsTests = [
  // Single Image
  {
    name: 'excludedPaths (Single Image, Partial Match)',
    input:
      '![A description of the image](https://example.com/image.png "An image title")',
    options: { excludedPaths: ['example.com'] },
    expected:
      '<p><img src="https://example.com/image.png" alt="A description of the image" title="An image title"></p>',
  },
  {
    name: 'excludedPaths (Single Image, absolute URL)',
    input:
      '![A description of the image](https://example.com/image.png "An image title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<figure><div><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></div></figure>',
  },
  {
    name: 'excludedPaths (Single Image, root-relative)',
    input: '![A description of the image](/images/image.png "An image title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<figure><div><figure><img alt="A description of the image" src="/images/image.png"><figcaption>An image title</figcaption></figure></div></figure>',
  },
  {
    name: 'excludedPaths (Single Image, relative)',
    input: '![A description of the image](./image.png "An image title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<p><img src="./image.png" alt="A description of the image" title="An image title"></p>',
  },
  // Multiple Images
  {
    name: 'excludedPaths (Multiple Images, Partial Match)',
    input:
      '![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](/images/image2.png "Image Title 2")',
    options: { excludedPaths: ['example.com'] },
    expected:
      '<p><img src="https://example.com/image1.png" alt="Image 1 description" title="Image Title 1"><img src="/images/image2.png" alt="Image 2 description" title="Image Title 2"></p>',
  },
  {
    name: 'excludedPaths (Multiple Images, non-relative)',
    input:
      '![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](/images/image2.png "Image Title 2")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<figure><div><figure><img alt="Image 1 description" src="https://example.com/image1.png"><figcaption>Image Title 1</figcaption></figure><figure><img alt="Image 2 description" src="/images/image2.png"><figcaption>Image Title 2</figcaption></figure></div></figure>',
  },
  {
    name: 'excludedPaths (Multiple Images, relative)',
    input:
      '![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](./image2.png "Image Title 2")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<p><img src="https://example.com/image1.png" alt="Image 1 description" title="Image Title 1"><img src="./image2.png" alt="Image 2 description" title="Image Title 2"></p>',
  },
  // Single Image Link
  {
    name: 'excludedPaths (Single Image Link, Partial Match)',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")',
    options: { excludedPaths: ['example.com'] },
    expected:
      '<p><a href="https://example.com/" title="A link title"><img src="https://example.com/image.png" alt="A description of the image" title="An image title"></a></p>',
  },
  {
    name: 'excludedPaths (Single Image Link, absolute URL)',
    input:
      '[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="A description of the image" src="https://example.com/image.png"><figcaption>An image title</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'excludedPaths (Single Image Link, root-relative)',
    input:
      '[![A description of the image](/images/image.png "An image title")](https://example.com/ "A link title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="A description of the image" src="/images/image.png"><figcaption>An image title</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'excludedPaths (Single Image Link, relative)',
    input:
      '[![A description of the image](./image.png "An image title")](https://example.com/ "A link title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<p><a href="https://example.com/" title="A link title"><img src="./image.png" alt="A description of the image" title="An image title"></a></p>',
  },
  // Multiple Image Link
  {
    name: 'excludedPaths (Multiple Image Link, Partial Match)',
    input:
      '[![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](/images/image2.png "Image Title 2")](https://example.com/ "A link title")',
    options: { excludedPaths: ['example.com'] },
    expected:
      '<p><a href="https://example.com/" title="A link title"><img src="https://example.com/image1.png" alt="Image 1 description" title="Image Title 1"><img src="/images/image2.png" alt="Image 2 description" title="Image Title 2"></a></p>',
  },
  {
    name: 'excludedPaths (Multiple Image Link, non-relative)',
    input:
      '[![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](/images/image2.png "Image Title 2")](https://example.com/ "A link title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<figure><a href="https://example.com/"><figure><img alt="Image 1 description" src="https://example.com/image1.png"><figcaption>Image Title 1</figcaption></figure><figure><img alt="Image 2 description" src="/images/image2.png"><figcaption>Image Title 2</figcaption></figure></a><figcaption>A link title</figcaption></figure>',
  },
  {
    name: 'excludedPaths (Multiple Image Link, relative)',
    input:
      '[![Image 1 description](https://example.com/image1.png "Image Title 1")![Image 2 description](./image2.png "Image Title 2")](https://example.com/ "A link title")',
    options: { excludedPaths: [/^(?![a-zA-Z]+:\/|\/)/] },
    expected:
      '<p><a href="https://example.com/" title="A link title"><img src="https://example.com/image1.png" alt="Image 1 description" title="Image Title 1"><img src="./image2.png" alt="Image 2 description" title="Image Title 2"></a></p>',
  },
]

export default [
  ...singleImageTests,
  ...multipleImagesTests,
  ...singleImageLinkTests,
  ...multipleImageLinkTests,
  ...attributesTests,
  ...excludedPathsTests,
]
