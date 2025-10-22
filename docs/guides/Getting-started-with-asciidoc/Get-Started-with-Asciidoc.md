---
id: asciidoc-getting-started-complete
title: Getting Started with AsciiDoc Syntax
sidebar_label: AsciiDoc Complete Guide
description: A comprehensive guide to AsciiDoc syntax including formatting, macros, blocks, attributes, and more.
tags: [asciidoc, asciidoctor, syntax, documentation, guide]
---

**Author:** Joseph Cayouette  
**Version:** v1.0 (2018-05-03)

---

## Overview (WIP)

This guide introduces the most common **AsciiDoc syntax** and conventions used in SUSE technical documentation.  
You’ll also learn how to structure content effectively, and apply best practices for maintainable writing.

### SUSE Documentation Style Guide (Asciidoc)
- [Official SUSE Asciidoc Style Guide](https://documentation.suse.com/style/current/single-html/style-guide-adoc/style-guide-adoc.html#art-styleguide)

### Syntax
- [AsciiDoc Syntax Quick Reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/)
- [AsciiDoc Language Documentation (Ruby)](https://docs.asciidoctor.org/asciidoc/latest/)

### Processing
- [Asciidoctor.js Documentation](https://docs.asciidoctor.org/asciidoctor.js/latest/)
- [Asciidoctor PDF Documetnation](https://docs.asciidoctor.org/pdf-converter/latest/)
- [Asciidoctor Diagram Documentation](https://docs.asciidoctor.org/diagram-extension/latest/)



# Getting Started with AsciiDoc Syntax

AsciiDoc is a lightweight, text-based markup language for authoring documentation, books, and technical content.  
It’s readable in plain text and easily converts to HTML, PDF, and other formats through [Asciidoctor](https://asciidoctor.org).

This guide provides a full syntax overview and examples for each feature of AsciiDoc.

---

## Table of Contents

- [Paragraphs](#paragraphs)
- [Text Formatting](#text-formatting)
- [Links](#links)
- [Document Header](#document-header)
- [Section Titles](#section-titles)
- [Automatic TOC](#automatic-toc)
- [Includes](#includes)
- [Lists](#lists)
- [Images](#images)
- [Audio](#audio)
- [Videos](#videos)
- [Keyboard, Button, and Menu Macros](#keyboard-button-and-menu-macros)
- [Literals and Source Code](#literals-and-source-code)
- [Admonitions](#admonitions)
- [More Delimited Blocks](#more-delimited-blocks)
- [Tables](#tables)
- [IDs, Roles, and Options](#ids-roles-and-options)
- [Comments](#comments)
- [Breaks](#breaks)
- [Attributes and Substitutions](#attributes-and-substitutions)
- [Text Replacements](#text-replacements)
- [Escaping Substitutions](#escaping-substitutions)
- [Bibliography](#bibliography)
- [Footnotes](#footnotes)
- [Markdown Compatibility](#markdown-compatibility)

---

## Paragraphs

A paragraph is one or more consecutive lines of text. Blank lines separate paragraphs.

```adoc
This is a normal paragraph.

This is another paragraph.
```

For literal paragraphs (preserve formatting):

```adoc
  This is a literal paragraph.
  Leading spaces and newlines are preserved.
```

---

## Text Formatting

AsciiDoc supports rich inline formatting:

```adoc
*bold* _italic_ *_bold italic_* `monospace`
^superscript^ ~subscript~
```

Result: **bold**, _italic_, **_bold italic_**, `monospace`, superscript^text^, subscript~text~.

---

## Links

```adoc
https://asciidoctor.org
https://asciidoctor.org[AsciiDoctor]
mailto:user@example.com[Email Us]
link:../file.adoc[Relative Link]
```

---

## Document Header

The header defines metadata and attributes.

```adoc
= Document Title
Author Name <author@example.com>
v1.0, 2025-10-22
:toc:
:sectnums:
```

---

## Section Titles

```adoc
= Level 0 Title
== Level 1
=== Level 2
==== Level 3
===== Level 4
====== Level 5
```

---

## Automatic TOC

Enable a table of contents automatically with:

```adoc
:toc:
:toclevels: 3
```

The TOC appears in the rendered output.

---

## Includes

Include other files or snippets:

```adoc
include::chapter1.adoc[]
include::snippets/code-example.adoc[tag=main]
```

---

## Lists

### Unordered List

```adoc
* Item 1
** Sub-item
*** Sub-sub-item
```

### Ordered List

```adoc
. Step 1
. Step 2
.. Sub-step
```

### Description List

```adoc
Term 1:: Definition
Term 2::
Multi-line definition
```

### Checklist

```adoc
* [x] Done
* [ ] Not done
```

---

## Images

```adoc
image::example.png[Alt text,300,200]
image::https://asciidoctor.org/images/octocat.jpg[GitHub mascot]
```

Use `:imagesdir:` to set a base directory.

---

## Audio

```adoc
audio::track.mp3[]
audio::https://example.com/music.mp3[Sample Audio]
```

---

## Videos

```adoc
video::sample.mp4[width=640, height=360]
video::https://www.youtube.com/embed/abcd1234[youtube]
```

---

## Keyboard, Button, and Menu Macros

```adoc
kbd:[Ctrl+S]
btn:[Submit]
menu:File[Save As]
```

---

## Literals and Source Code

### Inline Literal

```adoc
Use `+command+` to mark literal text.
```

### Source Block

```adoc
[source,python]
----
print("Hello, AsciiDoc!")
----
```

### Callouts

```adoc
[source,python]
----
print("Hello") # <1>
print("World!") # <2>
----
<1> Prints hello
<2> Prints world
```

---

## Admonitions

```adoc
NOTE: This is a note.
TIP: Pro tip here.
IMPORTANT: Don’t skip this.
WARNING: Be cautious!
CAUTION: Handle carefully.
```

Block style:

```adoc
[WARNING]
====
Critical warning block.
====
```

---

## More Delimited Blocks

```adoc
.Example
====
This is an example block.
====

.Quote
____
“Knowledge speaks, but wisdom listens.”
____

.Sidebar
****
Additional context or tips.
****

.Literal Block
....
$ echo "Hello"
....
```

---

## Tables

```adoc
|===
| Name | Age | Role
| Alice | 30 | Developer
| Bob | 40 | Manager
|===
```

---

## IDs, Roles, and Options

```adoc
[#custom-id]
== Section Title

[.role-name]
Text styled with role.

[options="header"]
|===
| Header | Value
| One | 1
| Two | 2
|===
```

---

## Comments

Comments are ignored in the output:

```adoc
// This is a comment line
////
This is a comment block.
Ignored in output.
////
```

---

## Breaks

```adoc
Line break +++
New line continues.
```

Horizontal rule:

```adoc
''' or ---
```

---

## Attributes and Substitutions

```adoc
:project-name: MyApp

The project name is {project-name}.
```

Substitutions apply within inline content or blocks using `[subs=+]`.

---

## Text Replacements

Define replacements globally:

```adoc
:heart: ❤️

I {heart} AsciiDoc!
```

---

## Escaping Substitutions

To prevent AsciiDoc from processing text, use a backslash or `pass` macro:

```adoc
\*Not bold\*
pass:[*Not bold*]
```

---

## Bibliography

```adoc
[bibliography]
== References

* [[[iso9001]]] ISO 9001:2015 Quality Management
* [[[agile]]] Manifesto for Agile Software Development
```

Reference example:

```adoc
See <<iso9001>> for details.
```

---

## Footnotes

```adoc
A sentence with a footnote.footnote:[This is the footnote text.]
```

---

## Markdown Compatibility

AsciiDoc supports most Markdown-style syntax:

```adoc
*italic* or _italic_
**bold** or __bold__
`code` or ``code``
```

However, AsciiDoc syntax is more structured and extensible.

---

_Last updated: October 2025_
