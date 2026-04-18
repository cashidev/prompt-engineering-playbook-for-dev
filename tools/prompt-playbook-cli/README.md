# prompt-playbook-cli

An interactive CLI for the [Prompt Engineering Playbook](../../README.md). Select a prompt template and it's instantly copied to your clipboard — ready to paste into Claude.

## Installation

**Option 1 — Link globally with npm link** (recommended for development):

```bash
cd tools/prompt-playbook-cli
npm link
```

Your CLI is now available anywhere in the terminal:

```bash
prompt-playbook-cli
prompt-playbook-cli debug
prompt-playbook-cli review
```

To unlink later:

```bash
npm unlink -g prompt-playbook
```

**Option 2 — Install globally:**

```bash
npm install -g .
```

**Option 3 — Run without installing:**

```bash
node index.js
```

## Usage

**Interactive mode** — pick a prompt from a menu:

```bash
prompt-playbook-cli
```

**Direct mode** — skip the menu and copy a prompt immediately:

```bash
prompt-playbook-cli <command>
```

## Available Commands

| Command | Description |
|---|---|
| `review` | Code review for readability, performance, and security |
| `debug` | Root cause analysis with fix and prevention strategy |
| `refactor` | Production-ready refactoring without functional changes |
| `testing` | Unit tests covering edge cases and failure scenarios |
| `system-design` | Scalable system architecture with trade-offs |
| `performance` | Bottleneck identification and optimization |
| `security` | Vulnerability audit focused on input validation and auth |
| `api-design` | RESTful API design review and improvement |
| `problem-solving` | Structured step-by-step problem breakdown |

## How It Works

Each command loads a prompt template, displays it in the terminal, and copies it to your clipboard. Open Claude, paste, fill in the placeholders (`<insert code>`, `<describe the problem>`, etc.), and send.

## Requirements

Node.js 14+
