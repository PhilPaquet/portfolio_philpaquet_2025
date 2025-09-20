import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";

const STACK_REPO = "https://github.com/tim-cw/timtools.git";
const TMP_DIR = path.resolve("tmp-stack");
const PACKAGE_JSON_PATH = path.resolve("package.json");
const TIMTOOLS_DIR = path.resolve(".timtools");

// Fonction utilitaire pour copier récursivement un dossier en ignorant .git
function copyRecursive(src, dest) {
  const stats = statSync(src);
  if (stats.isDirectory()) {
    const folderName = path.basename(src);
    if (folderName === ".git") return; // ignore .git
    mkdirSync(dest, { recursive: true });
    for (const file of readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    copyFileSync(src, dest);
  }
}

async function main() {
  console.log("Lecture de la version du devoir...");

  if (!fs.existsSync(PACKAGE_JSON_PATH)) {
    console.error("package.json introuvable !");
    process.exit(1);
  }

  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf-8"));
  const tagVersion = pkg.version;
  if (!tagVersion) {
    console.error("Aucune version trouvée dans package.json !");
    process.exit(1);
  }

  console.log(
    `Version détectée : ${tagVersion}, clonage du stack correspondant...`
  );

  if (fs.existsSync(TMP_DIR))
    fs.rmSync(TMP_DIR, { recursive: true, force: true });

  execSync(`git clone --depth 1 --no-checkout ${STACK_REPO} "${TMP_DIR}"`, {
    stdio: "inherit",
  });
  execSync(`git -C "${TMP_DIR}" checkout tags/${tagVersion}`, {
    stdio: "inherit",
  });

  console.log("Copie du stack à la racine (en ignorant .git)...");
  copyRecursive(TMP_DIR, process.cwd());

  fs.rmSync(TMP_DIR, { recursive: true, force: true });

  console.log(
    "Stack installé avec succès ! Le dépôt Git du devoir est intact."
  );

  // --- Nouvelle étape : installer les dépendances du package.json du stack ---
  console.log("Installation des dépendances du stack...");
  execSync("npm install", { stdio: "inherit" });
  console.log("Toutes les dépendances sont installées !");
}

// --> suppression du dossier .timtools si tout a fonctionné
if (fs.existsSync(TIMTOOLS_DIR)) {
  fs.rmSync(TIMTOOLS_DIR, { recursive: true, force: true });
  console.log("🧹 Dossier .timtools supprimé");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
