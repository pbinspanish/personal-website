hugo
git add .
git commit -m $Args[0]
git push -u origin master
cd pbinspanish.github.io
git add .
git commit -m $Args[0]
git push -u origin master
cd ..