const fs = require("fs");
const path = require("path");

const nextBuildPath = path.join(__dirname, "out");
const destinationPath = path.join(__dirname, "../Maximus.Server/obj/Host/bin/clientdist");

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

function copyDir(src, dest) {
    if (!fs.existsSync(src)) {
        console.error(`❌ Source directory does not exist: ${src}`);
        return;
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
}

console.log("🚀 Moving Next.js build to the build directory...");

removeDir(destinationPath);

copyDir(nextBuildPath, destinationPath);

console.log("✅ Next.js build moved to build driectory");