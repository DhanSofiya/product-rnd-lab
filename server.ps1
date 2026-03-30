# Simple PowerShell HTTP Server for local development
# Usage: powershell -ExecutionPolicy Bypass -File server.ps1 [port]

param($port = 8080)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "--- Learning Product R&D Lab Server ---"
Write-Host "Server started at http://localhost:$port/"
Write-Host "Press Ctrl+C to stop.`n"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $url = $request.Url.LocalPath
        if ($url -eq "/") { $url = "/index.html" }
        
        $filePath = Join-Path (Get-Location) $url
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            
            # Basic Content-Type mapping
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html" }
                ".js"   { "application/javascript" }
                ".css"  { "text/css" }
                ".csv"  { "text/csv" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".json" { "application/json" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            # Enable CORS for local testing
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $message = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $url")
            $response.OutputStream.Write($message, 0, $message.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
