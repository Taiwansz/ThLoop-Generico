# ⚡ ThLoop - Site Oficial

Site moderno, elegante, responsivo e de alta performance desenvolvido para a empresa **ThLoop** (Ecossistema de Software, Automação Autônoma e Eficiência Digital).

---

## 🚀 Como Fazer o Deploy na Vercel

O projeto já está **100% configurado** com `vercel.json` e otimizado para deploy instantâneo na **Vercel**.

Escolha uma das 3 formas abaixo para publicar o site em poucos segundos:

---

### 🌐 Opção 1: Upload Direto no Painel da Vercel (Mais Fácil - Sem Terminal)

1. Acesse o site oficial da Vercel: [https://vercel.com](https://vercel.com) e faça login na sua conta.
2. Clique no botão **"Add New..."** -> **"Project"**.
3. Escolha a opção **"Drag and Drop"** (ou Importar pasta).
4. Arraste a pasta `ThLoop-Website` diretamente para a área indicada na tela.
5. Clique em **Deploy**. 
6. Pronto! Em 5 segundos seu site estará no ar com HTTPS e CDN mundial.

---

### 💻 Opção 2: Pelo Terminal / Vercel CLI (Desenvolvedores)

Abra o terminal (PowerShell ou Command Prompt) dentro da pasta do projeto e execute:

```bash
# 1. Navegue até a pasta
cd C:\Users\52319400\Downloads\ThLoop-Website

# 2. Execute o comando do Vercel CLI (não precisa instalar nada previamente)
npx vercel
```

- Responda `y` para confirmar o deploy.
- Ao final, ele gerará o link da prévia e o link final de produção (`https://thloop-website.vercel.app`).

Para publicar em **Produção direta**:
```bash
npx vercel --prod
```

---

### 🐙 Opção 3: Via Repositório Git (GitHub / GitLab / Bitbucket)

1. Crie um repositório no GitHub (ex: `thloop-website`).
2. Suba o código para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ThLoop website"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/thloop-website.git
   git push -u origin main
   ```
3. No painel da Vercel, clique em **"Import Project"** e escolha o repositório do GitHub.
4. Clique em **Deploy**. Todo `git push` futuro atualizará o site automaticamente!

---

## 📂 Estrutura dos Arquivos do Projeto

- `index.html` -> Estrutura semântica das páginas, seções, contadores e formulários.
- `styles.css` -> Estilização Tailwind, glassmorphism, gradientes e responsividade mobile.
- `script.js` -> Lógica dos contadores animados, calculadora de ROI, partículas hero, menu mobile e modais.
- `vercel.json` -> Configurações de cabeçalhos de segurança, URLs amigáveis e cache CDN da Vercel.
- `package.json` -> Definição de scripts de build e start.
- `.gitignore` & `.vercelignore` -> Filtro de arquivos desnecessários no deploy.

---

## 🌐 Tecnologias Utilizadas

- **HTML5 & CSS3**
- **Tailwind CSS v3**
- **Lucide Icons**
- **Google Fonts (Plus Jakarta Sans & Space Grotesk)**
- **JavaScript ES6+ & Canvas API 2D**

© 2026 **ThLoop Inc.** Todos os direitos reservados.
