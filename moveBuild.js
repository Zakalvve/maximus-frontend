const fs = require("fs");
const path = require("path");

const projectRoot = __dirname;

const standalonePath = path.join(projectRoot, ".next", "standalone");
const staticSourcePath = path.join(projectRoot, ".next", "static");
const staticDestPath = path.join(standalonePath, ".next", "static");

const finalDestination = path.join(projectRoot, "../Maximus.Server/obj/Host/bin/frontend");

function removeDir(dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file) => {
            const fullPath = path.join(dir, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                removeDir(fullPath);
            } else {
                fs.unlinkSync(fullPath);
            }
        });
        fs.rmdirSync(dir);
    }
}

function removeDir(dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file) => {
            const fullPath = path.join(dir, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                removeDir(fullPath);
            } else {
                fs.unlinkSync(fullPath);
            }
        });
        fs.rmdirSync(dir);
    }
}

// Utility to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(src)) {
        console.error(`❌ Source directory does not exist: ${src}`);
        return false;
    }

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    fs.readdirSync(src).forEach((file) => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        if (fs.lstatSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`📂 Copying: ${srcPath} → ${destPath}`);
        }
    });

    return true;
}

console.log("🚀 Preparing Next.js standalone frontend...");

// Step 1: Move static/ into standalone/.next/static
console.log("🔄 Moving static assets...");

const fullStandaloneNextPath = path.join(standalonePath, ".next");
if (!fs.existsSync(fullStandaloneNextPath)) {
    fs.mkdirSync(fullStandaloneNextPath, { recursive: true });
}

// Clean up old static if exists
removeDir(staticDestPath);

// Copy static files into correct position
let staticCopied = copyDir(staticSourcePath, staticDestPath);

if (!staticCopied) {
    console.error("❌ Failed to copy static assets. Aborting...");
    process.exit(1);
}

// Step 2: Copy standalone to destination
console.log("🚛 Moving standalone to build directory...");

// Clean destination first
removeDir(finalDestination);

// Copy everything from standalone
let standaloneCopied = copyDir(standalonePath, finalDestination);

if (standaloneCopied) {
    console.log("✅ Standalone app moved successfully!");
} else {
    console.error("❌ Failed to move standalone app.");
    process.exit(1);
}
