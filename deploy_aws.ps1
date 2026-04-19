param(
  [string]$BucketName = "summit-harbor-mortgage-621580823968",
  [string]$DistributionId = "E1QDB0SG96S6C"
)

$ErrorActionPreference = "Stop"

Write-Host "Syncing static files to s3://$BucketName ..."
aws s3 sync . "s3://$BucketName" --exclude "*" --include "index.html" --include "styles.css" --include "script.js"

Write-Host "Creating CloudFront invalidation for distribution $DistributionId ..."
aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"

Write-Host "Deployment request submitted."
