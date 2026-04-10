@echo off
set "dirs=requirements\grading\rubric\versions requirements\input-output\schemas architecture\pipeline ai\prompts\versions ai\samples\inputs ai\samples\outputs ai\samples\paired-cases ai\evaluations\summaries mvp\app mvp\engine mvp\mocks mvp\versions testing\cases testing\benchmarks testing\results design\snapshots planning\phases"

for %%d in (%dirs%) do (
    if not exist "%%d" mkdir "%%d"
    echo. > "%%d\.gitkeep"
)
