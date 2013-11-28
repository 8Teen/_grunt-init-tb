
@REM cmd /c npm install grunt

IF NOT EXIST %~dp0node_modules\grunt (
    echo 'install grunt'
    cmd /c npm install grunt
)


@echo off

set servers=grunt-contrib-concat,grunt-contrib-uglify,grunt-contrib-less

for %%i in (%servers%) do (

    IF NOT EXIST %~dp0node_modules\%%i (
        cmd /c npm install %%i
        echo %%i
    )
)

@pause