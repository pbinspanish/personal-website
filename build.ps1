cd "C:\Libraries\OneDrive - University of Windsor\Documents\Programming\Personal Website\pbinspanish.hugo"
hugo
git add .
git commit -m $Args[0]
git push -u origin master
cd pbinspanish.github.io
git add .
git commit -m $Args[0]
git push -u origin master
cd ..