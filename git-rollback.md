# Git Rollback Commands

## 1. Check what remote is connected
```bash
git remote -v
```

## 2. View recent commit history
```bash
git log --oneline -10
```

## 3. See what files have local changes
```bash
git status
```

## 4. Restore a specific file to the last committed state
```bash
git restore path/to/your/file
```

## 5. Verify everything is clean
```bash
git status
```

---

To restore **all** changed files at once (nuclear option):
```bash
git restore .
```
