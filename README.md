
## forked from [chjj/marked](https://github.com/chjj/marked)

## todo list
- [x] TOC parse
- [x] task list parse
- [x] themes
- [ ] code highlight

## 支持 [TOC] 解析

code

``` markdown
[toc]
# HEAD
## category
###### Headings
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
## Comments
## Horizontal Rules
## Body Copy
## Inline HTML
## Emphasis
### Bold
### Italics
### strikethrough
### Blockquotes
## Notices
## Lists
### Unordered
### Ordered
## Code
### Inline code
### Indented code
### Block code “fences”
### Syntax highlighting
## Tables
### Right aligned text
## Links
### Basic link
### Add a title
### Named Anchors
## Images
```

preview

![image](https://raw.githubusercontent.com/ekoooo/marked/master/screenshot/toc.png)

## 支持 task list 解析

code

```markdown
# todo list
- [x] [links](), **formatting**, and <del>tags</del> are supported
- [x] A `markdown` parser and compiler. Built for speed.
- [x] this is a complete item
- [ ] this is an incomplete item
```

preview

![image](https://raw.githubusercontent.com/ekoooo/marked/master/screenshot/tasklist.png)