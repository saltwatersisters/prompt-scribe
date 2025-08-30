# Prompt Scribe

[![NPM version](https://img.shields.io/npm/v/prompt-scribe.svg?style=flat)](https://www.npmjs.com/package/prompt-scribe)

A simple, zero-configuration build tool that compiles markdown (`.md`) prompt files into TypeScript (`.ts`) modules, making them easy and reliable to import into your application.

## Why?

Managing AI prompts written in markdown directly within TypeScript template literals is cumbersome and lacks proper editor support for syntax highlighting and formatting. `prompt-scribe` solves this by allowing you to maintain prompts in their native `.md` format while providing the reliability of static TypeScript imports at build time.

This gives you the best of both worlds:
-   **Excellent Developer Experience**: Write and maintain prompts in pure markdown.
-   **Production Reliability**: Benefit from static, compiled inclusion of prompts into your codebase.

## Installation

Install the package as a development dependency in your project:

```bash
npm install --save-dev prompt-scribe