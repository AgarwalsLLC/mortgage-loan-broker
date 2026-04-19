# Mortgage Loan Broker Website

Modern, conversion-focused static website for a U.S. mortgage brokerage.

## Live Deployments

- AWS CloudFront (primary): https://dqk9um2h2zzrw.cloudfront.net
- AWS S3 website endpoint: http://summit-harbor-mortgage-621580823968.s3-website-us-east-1.amazonaws.com
- GitHub repository: https://github.com/AgarwalsLLC/mortgage-loan-broker
- GitHub Pages: https://agarwalsllc.github.io/mortgage-loan-broker/

## What Was Built

- High-impact hero with full-bleed real-estate background image
- Loan program section (Conventional, FHA, VA, Jumbo, DSCR, Non-QM)
- Purchase vs refinance pathways
- Mortgage calculator (principal + interest estimate)
- Process timeline, testimonials, FAQ accordion
- Contact/intake form with consent checkbox
- Compliance-oriented footer with NMLS and legal placeholders

## Local Run

This is a static site. Open `index.html` directly in browser.

## AWS Update Command

Use:

```powershell
.\deploy_aws.ps1
```

It syncs `index.html`, `styles.css`, and `script.js` to S3 and issues a CloudFront invalidation.

## Squarespace Domain Setup (for Google Domains migrated to Squarespace)

1. Open your domain in Squarespace Domains -> DNS Settings.
2. Add a CNAME record:
   - Host: `www`
   - Value: `dqk9um2h2zzrw.cloudfront.net`
3. Set root/apex forwarding from `yourdomain.com` to `https://www.yourdomain.com`.
4. For full custom-domain HTTPS on CloudFront (recommended):
   - Request an ACM cert in `us-east-1` for `yourdomain.com` and `www.yourdomain.com`
   - Add ACM DNS validation CNAME records inside Squarespace DNS
   - Update CloudFront distribution aliases + certificate once validation is complete

## Regulatory/Compliance Notes Before Public Launch

- Replace all `NMLS` placeholders with actual registered identifiers.
- Publish actual licensed states before accepting applications.
- Keep marketing copy aligned with CFPB/Reg Z and MAP Rule requirements.
- Keep written consent language for calls/SMS/email aligned with your legal counsel guidance.
