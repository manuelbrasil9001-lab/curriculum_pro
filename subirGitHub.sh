#!/bin/bash

# 1. Configuración fija (Para evitar errores de espacios o nombres mal detectados)
USER_GITHUB="manuelbrasil9001-lab"
REPO_NAME="curriculum_pro"
REMOTE_URL="https://github.com/$USER_GITHUB/$REPO_NAME.git"

echo "🚀 Iniciando subida para: $REPO_NAME"

# 2. Inicializar Git si no existe[cite: 1]
if [ ! -d ".git" ]; then
    git init
    git branch -M main
    echo "✅ Git inicializado."
fi

# 3. Forzar la URL correcta del remoto[cite: 1]
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"
echo "✅ Apuntando a: $REMOTE_URL"

# 4. Crear .gitignore si no existe para no subir basura[cite: 1]
if [ ! -f ".gitignore" ]; then
    cat <<EOT > .gitignore
node_modules/
.next/
.env
dist/
build/
.DS_Store
EOT
    echo "✅ .gitignore creado."
fi

# 5. Proceso de Git[cite: 1]
echo "📦 Preparando archivos..."
git add .

# Verificar si hay cambios antes de hacer commit[cite: 1]
if [ -n "$(git status --porcelain)" ]; then
    git commit -m "Actualización: $(date +'%Y-%m-%d %H:%M:%S')"
    echo "⬆️ Subiendo a GitHub..."
    # Usamos --force para limpiar cualquier archivo viejo (como el index.html)[cite: 1]
    git push -u origin main --force
    echo "🎉 ¡Éxito! Revisa tu código en: $REMOTE_URL"
else
    echo "ℹ️ No hay cambios nuevos que subir."
fi
