@ECHO OFF

echo Starting build...
npm run build && (
    echo Changing directory to dist...
    cd dist && (
        echo Initializing git...
        git init
        git add .
        git commit -m 'deploy'
        git push -f https://github.com/SiaoXiao/side_project_Mall_new.git master:gh-pages
    )
)
IF ERRORLEVEL 1 GOTO error

cd ..
GOTO end

:error
echo An error occurred!
pause
exit /b %errorlevel%

:end
echo Script completed successfully!
pause
