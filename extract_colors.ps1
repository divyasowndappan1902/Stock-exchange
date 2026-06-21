Add-Type -AssemblyName System.Drawing
$imgPath = "c:\Users\Admin\Desktop\Stock Exchange\assets\images\logo.webp"
$img = [System.Drawing.Image]::FromFile($imgPath)
$bmp = New-Object System.Drawing.Bitmap($img)
$colors = @{}

for ($x=0; $x -lt $bmp.Width; $x+=5) {
    for ($y=0; $y -lt $bmp.Height; $y+=5) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 0 -and ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) -and ($c.R -gt 5 -or $c.G -gt 5 -or $c.B -gt 5)) {
            $hex = '#{0:X2}{1:X2}{2:X2}' -f $c.R, $c.G, $c.B
            $colors[$hex]++
        }
    }
}
$bmp.Dispose()
$img.Dispose()

$colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 10 | Format-Table -AutoSize
