# Build
hugo

# Stage and commit the changes to the generation to the hugo repo
git add .
git commit -m $Args[0]
git push -u origin master

# Stage and commit the generated pages to the website repo
cd pbinspanish.github.io
git add .
git commit -m $Args[0]
git push -u origin master
cd ..