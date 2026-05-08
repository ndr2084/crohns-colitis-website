# Resetting to the Last Pushed GitHub Version

Your remote is `origin`, your branch is `main`.

---

## The quick version (just do this)

```bash
git fetch origin
git reset --hard origin/main
```

`fetch` downloads the latest state from GitHub without touching your files.  
`reset --hard` moves your local branch to exactly match it — all uncommitted changes are gone.

---

## Before you do that — save your work first (optional)

If you want to keep your recent changes somewhere safe before wiping them:

```bash
git stash
```

This tucks your uncommitted changes away. You can get them back later with `git stash pop` if you change your mind.

---

## If you already committed the bad changes locally

Check your log to see where you are vs. where GitHub is:

```bash
git log --oneline origin/main..HEAD
```

This shows commits that are on your machine but **not** on GitHub. If you see entries here, those are the "boo-boo" commits.

To wipe them and match GitHub exactly:

```bash
git reset --hard origin/main
```

---

## If you want to restore just one specific file

Instead of resetting everything, you can pull a single file back from the remote:

```bash
git checkout origin/main -- path/to/your/file.scss
```

Replace `path/to/your/file.scss` with the actual file path.

---

## Verify it worked

```bash
git status
git log --oneline -5
```

`git status` should say `nothing to commit, working tree clean`.  
`git log` should show the same top commit as what's on GitHub.

---

## Quick reference

| Command | What it does |
|---|---|
| `git fetch origin` | Download latest from GitHub (safe, changes nothing locally) |
| `git reset --hard origin/main` | Wipe local changes, match GitHub exactly |
| `git stash` | Save uncommitted changes temporarily |
| `git stash pop` | Restore stashed changes |
| `git log --oneline origin/main..HEAD` | Show commits you have locally but GitHub doesn't |
| `git checkout origin/main -- <file>` | Restore a single file from GitHub's version |

> **Warning:** `reset --hard` permanently discards uncommitted local changes. If you haven't stashed or committed them, they are gone.
