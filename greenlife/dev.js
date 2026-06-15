import { spawn, execSync } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function checkAndInstall(name, dir) {
  const dirPath = path.join(__dirname, dir);
  const nodeModulesExists = fs.existsSync(path.join(dirPath, "node_modules"));
  if (!nodeModulesExists) {
    console.log(`\n📦 Thư mục [node_modules] của ${name} chưa được cài đặt.`);
    console.log(`⏳ Đang tự động chạy [npm install] trong thư mục [${dir}]... Vui lòng đợi trong giây lát...`);
    try {
      execSync("npm install", { cwd: dirPath, stdio: "inherit" });
      console.log(`✅ Đã cài đặt thành công toàn bộ thư viện cho ${name}!`);
    } catch (error) {
      console.error(`❌ Gặp sự cố khi tự động cài đặt thư viện cho ${name}:`, error);
      process.exit(1);
    }
  }
}

function runService(name, dir, command, args) {
  console.log(`🚀 Đang kích hoạt ${name}...`);
  const child = spawn(command, args, {
    cwd: path.join(__dirname, dir),
    shell: true,
    stdio: "inherit"
  });

  child.on("close", (code) => {
    if (code !== 0 && code !== null) {
      console.log(`❌ Tiến trình ${name} kết thúc với mã lỗi ${code}`);
    }
  });

  return child;
}

// 1. Tự động kiểm tra và cài đặt dependencies nếu chưa có
checkAndInstall("AI Service", "ai");
checkAndInstall("Frontend Client", "frontend");

// 2. Khởi chạy đồng thời cả hai máy chủ
console.log("\n🌱===================================================🌱");
console.log("   KHỞI CHẠY ĐỒNG THỜI HỆ THỐNG GREENLIFE MONOREPO  ");
console.log("🌱===================================================🌱\n");

runService("AI Service (Cổng 5000)", "ai", "npm", ["run", "dev"]);
runService("Frontend Client (Cổng 3000)", "frontend", "npm", ["run", "dev"]);
