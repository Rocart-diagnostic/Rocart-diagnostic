# ROCART Diagnostic v0.4

Application mobile-first de diagnostic pour décors thématiques en béton projeté sculpté, GRC et résines polyester.

## 🚀 Déploiement sur Vercel (3 clics)

### Étape 1 : Créer un repo GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Crée un repo public `rocart-diagnostic`
3. **TRÈS IMPORTANT** : Clique sur "Add a README file"
4. Clique "Create repository"

### Étape 2 : Importer les fichiers

Dans ton navigateur (depuis GitHub) :
1. Clique **"Upload files"**
2. Glisse-dépose le contenu de ce dossier (sauf `.git`)
3. Clique **"Commit changes"**

Ou en ligne de commande (si tu as Git) :
```bash
cd rocart-vercel
git init
git add .
git commit -m "Initial commit: ROCART Diagnostic v0.4"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/rocart-diagnostic.git
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com)
2. **"New Project"**
3. Clique **"Import Git Repository"**
4. Trouve et clique sur `rocart-diagnostic`
5. Clique **"Deploy"**
6. Attends 30 secondes ⏳
7. **Boom !** Ton lien: `rocart-diagnostic.vercel.app`

### Étape 4 (optionnel) : Custom domain

Si tu veux `diagnostic.rocart.fr` ou `app.rocart.fr` :
1. Dans Vercel, va dans l'onglet **Domains**
2. Ajoute ton domaine
3. Suis les étapes de configuration DNS

---

## 📱 Utilisation sur smartphone

### Installation en 2 clics

**iOS** (Safari) :
1. Ouvre l'app
2. Bouton partage (en bas) → "Ajouter à l'écran d'accueil"
3. Done ! Icône Rocart sur home

**Android** (Chrome) :
1. Ouvre l'app
2. Menu (3 points) → "Installer l'app"
3. Done ! Icône Rocart sur home

### Fonctionnalités

- 📷 **Photos** : Caméra directe ou galerie
- 🏗️ **6 couches structurelles** : Avec illustrations
- 📊 **Criticité technique** : N1 (surveillance) / N2 (planifié) / N3 (immédiat)
- 🗺️ **Localisation GPS** : Auto + boussole
- 💾 **Export** : JSON sauvegarde + HTML rapport
- ☁️ **Hors-ligne** : Fonctionne sans internet (synchro auto)

---

## 🔧 Pour développer localement

```bash
npm install
npm run dev
```

Accède à `http://localhost:3000`

---

## 📋 Checkpoints avant démo François

- [ ] Tester photo + sélection couches sur téléphone réel
- [ ] Exporter 1-2 diagnostics en HTML → vérifier rendu
- [ ] Vérifier GPS fonctionne
- [ ] Exporter JSON → vérifier structure
- [ ] Test hors-ligne (mode avion)
- [ ] Partager le lien Vercel avec François

---

## 🎯 Roadmap v0.5+

- Génération PDF natif (vs HTML)
- Annotation directe sur photo (entourer, ajouter cotes)
- Intégration Google Drive (upload auto)
- Cartographie SIG du site
- Mode multi-utilisateurs (inspecteurs + validateurs)

---

## 📞 Support

Tout problème ? Vérifiez :
1. Les logs de Vercel (onglet Deployments)
2. Browser console (F12 → Console)
3. Le manifest.json charge bien (F12 → Application → Manifest)

Bon diagnostic ! 🚀
