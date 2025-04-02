# remark-image-caption

[![CI](https://github.com/Hasenpfote/remark-image-caption/actions/workflows/ci.yml/badge.svg)](https://github.com/Hasenpfote/remark-image-caption/actions/workflows/ci.yml)

A remark plugin that transforms images and image links in Markdown into figures with captions.

## Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [License](#license)

## Introduction

This package is a unified plugin for remark that processes images and image links with titles (e.g., `![A description](url "A title")`) and transforms them into semantic `<figure>` elements. The title attribute is used as a caption, enhancing the accessibility and readability of Markdown content.

## Installation

This package is ESM-only.

```shellsession
npm install git+https://github.com/Hasenpfote/remark-image-caption.git
```

## Usage

```typescript
import rehypeStringify from 'rehype-stringify'
import remarkImageCaption from 'remark-image-caption'
import type { UserOptions } from 'remark-image-caption'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const markdown = '![A description of the image](https://example.com/image.png "An image title")'

;(async (markdown: string, options: UserOptions = {}): Promise<void> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkImageCaption, options)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)

  console.log(String(file))
})(markdown)
```

Running that yields:

```html
<figure>
  <div>
    <figure>
      <img alt="A description of the image" src="https://example.com/image.png">
      <figcaption>An image title</figcaption>
    </figure>
  </div>
</figure>
```

### Single Image

#### With Caption

Markdown:

```markdown
![A description of the image](https://example.com/image.png "An image title")
```

HTML:

```html
<figure>
  <div>
    <figure>
      <img alt="A description of the image" src="https://example.com/image.png">
      <figcaption>An image title</figcaption>
    </figure>
  </div>
</figure>
```

#### Without Caption

Markdown:

```markdown
![A description of the image](https://example.com/image.png)
```

HTML:

```html
<figure>
  <div>
    <img alt="A description of the image" src="https://example.com/image.png">
  </div>
</figure>
```

### Multiple Images

When you include only images within a paragraph, they will be grouped together. Hard or soft breaks can also be used.

#### With Captions

Markdown:

```markdown
![Image 1 description](https://example.com/image1.png "Image Title 1")  
![Image 2 description](https://example.com/image2.png "Image Title 2")
```

HTML:

```html
<figure>
  <div>
    <figure>
      <img alt="Image 1 description" src="https://example.com/image1.png">
      <figcaption>Image Title 1</figcaption>
    </figure>
    <figure>
      <img alt="Image 2 description" src="https://example.com/image2.png">
      <figcaption>Image Title 2</figcaption>
    </figure>
  </div>
</figure>
```

#### Without Captions

Markdown:

```markdown
![Image 1 description](https://example.com/image1.png)  
![Image 2 description](https://example.com/image2.png)
```

HTML:

```html
<figure>
  <div>
    <img alt="Image 1 description" src="https://example.com/image1.png">
    <img alt="Image 2 description" src="https://example.com/image2.png">
  </div>
</figure>
```

#### With Shared Caption

Markdown:

```markdown
![Image 1 description](https://example.com/image1.png "This becomes the caption")  
![Image 2 description](https://example.com/image2.png)
```

HTML:

```html
<figure>
  <div>
    <img alt="Image 1 description" src="https://example.com/image1.png">
    <img alt="Image 2 description" src="https://example.com/image2.png">
  </div>
  <figcaption>This becomes the caption</figcaption>
</figure>
```

### Single Image Link

#### With Caption

Markdown:

```markdown
[![A description of the image](https://example.com/image.png "An image title")](https://example.com/ "A link title")
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <figure>
      <img alt="A description of the image" src="https://example.com/image.png">
      <figcaption>An image title</figcaption>
    </figure>
  </a>
  <figcaption>A link title</figcaption>
</figure>
```

---

Markdown:

```markdown
[![A description of the image](https://example.com/image.png)](https://example.com/ "A link title")
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <img alt="A description of the image" src="https://example.com/image.png">
  </a>
  <figcaption>A link title</figcaption>
</figure>
```

---

Markdown:

```markdown
[![A description of the image](https://example.com/image.png "An image title")](https://example.com/)
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <figure>
      <img alt="A description of the image" src="https://example.com/image.png">
      <figcaption>An image title</figcaption>
    </figure>
  </a>
</figure>
```

#### Without Caption

Markdown:

```markdown
[![A description of the image](https://example.com/image.png)](https://example.com/)
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <img alt="A description of the image" src="https://example.com/image.png">
  </a>
</figure>
```

### Multiple Image Link

When you include only a multiple-image link within a paragraph, the images will be grouped together. Hard or soft breaks can also be used.

#### With Captions

Markdown:

```markdown
[![Image 1 description](https://example.com/image1.png "Image Title 1")  
![Image 2 description](https://example.com/image2.png "Image Title 2")](https://example.com/ "A link title")
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <figure>
      <img alt="Image 1 description" src="https://example.com/image1.png">
      <figcaption>Image Title 1</figcaption>
    </figure>
    <figure>
      <img alt="Image 2 description" src="https://example.com/image2.png">
      <figcaption>Image Title 2</figcaption>
    </figure>
  </a>
  <figcaption>A link title</figcaption>
</figure>
```

---

Markdown:

```markdown
[![Image 1 description](https://example.com/image1.png)  
![Image 2 description](https://example.com/image2.png)](https://example.com/ "A link title")
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <img alt="Image 1 description" src="https://example.com/image1.png">
    <img alt="Image 2 description" src="https://example.com/image2.png">
  </a>
  <figcaption>A link title</figcaption>
</figure>
```

---

Markdown:

```markdown
[![Image 1 description](https://example.com/image1.png "Image Title 1")  
![Image 2 description](https://example.com/image2.png "Image Title 2")](https://example.com/)
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <figure>
      <img alt="Image 1 description" src="https://example.com/image1.png">
      <figcaption>Image Title 1</figcaption>
    </figure>
    <figure>
      <img alt="Image 2 description" src="https://example.com/image2.png">
      <figcaption>Image Title 2</figcaption>
    </figure>
  </a>
</figure>
```

#### Without Captions

Markdown:

```markdown
[![Image 1 description](https://example.com/image1.png)  
![Image 2 description](https://example.com/image2.png)](https://example.com/)
```

HTML:

```html
<figure>
  <a href="https://example.com/">
    <img alt="Image 1 description" src="https://example.com/image1.png">
    <img alt="Image 2 description" src="https://example.com/image2.png">
  </a>
</figure>
```

## API Reference

The default export is `remarkImageCaption`.

### Options

| Name           | Type                 | Default | Description                                                                                                                                                      |
| -------------- | -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className      | string               | ""      | The class name to apply to the outer `<figure>` element.                                                                                                         |
| excludedPaths  | (string \| RegExp)[] | []      | An array of image paths that should be excluded from transformation. This can also be used to exclude paths like those under the `src` folder in Astro projects. |
| lazyLoad       | boolean              | false   | Set the `loading` attribute on `<img>` elements.                                                                                                                 |
| linkAttributes | LinkAttributes       |         | Set the target and relationship attributes for external links. These attributes can also be left unset to delegate handling to other plugins.                    |

#### linkAttributes

| Name   | Type   | Default | Description                                                                                                                      |
| ------ | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| target | string | ''      | Specify where to open linked documents. The default (empty) does not set a target on links.                                      |
| rel    | string | ''      | Define the relationship between the current document and the linked document. The default (empty) does not set any relationship. |

## License

[MIT](https://github.com/Hasenpfote/remark-image-caption/blob/main/LICENSE)
