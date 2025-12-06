---
sidebar_position: 3
---

# Credit System Explained

Understanding how credits work, pricing, and cost optimization strategies.

## What Are Credits?

Credits are Third Space's unit of measurement for streaming time. Think of them like prepaid minutes on a phone plan.

### Simple Formula

```
Linux: 1 credit = 1 minute of active streaming
Windows: 2 credits = 1 minute of active streaming
```

### Why the Difference?

**Linux costs less because:**
- More efficient GPU drivers
- Smaller instance overhead
- Better performance per dollar on AWS
- Faster boot and deployment times

**Windows costs more because:**
- Licensing fees (Windows Server)
- Larger instance requirements
- Less optimized GPU utilization

:::tip Recommendation
Use Linux builds whenever possible to cut your streaming costs in half.
:::

## When Are Credits Consumed?

### Active Streaming Only

Credits are **only consumed** when:
- A user is actively connected to your stream
- Video frames are being transmitted
- The instance is processing inputs

Credits are **NOT consumed** when:
- Instance is idle (no users connected)
- Instance is stopped
- Deployment is in progress
- Project is uploaded but not deployed

### Example Timeline

```
10:00 AM - User connects → Credits start
10:15 AM - User disconnects → Credits stop
          (15 minutes consumed)

10:20 AM - New user connects → Credits resume
10:25 AM - User inactive for 2 min → Auto-disconnect
10:27 AM - Credits stop
          (5 minutes consumed)

Total: 20 credits (Linux) or 40 credits (Windows)
```

## Idle Timeout System

To prevent unnecessary credit consumption, instances automatically shut down after a period of inactivity.

### Timeout Periods by Tier

| Tier | Idle Timeout | Cost Savings |
|------|--------------|--------------|
| **Free** | 2 minutes | High - prevents wasted credits |
| **Plus** | 2 minutes | High - prevents wasted credits |
| **Pro** | 5 minutes | Balanced - allows brief pauses |
| **Enterprise** | Custom (up to 30 min) | Configurable per use case |

### How Idle Detection Works

**Idle is triggered when:**
- No mouse movement for X minutes
- No keyboard input for X minutes
- No touch events for X minutes (mobile)
- Browser window minimized/hidden (optional)

**User receives warning:**
- 30-second countdown notification
- "Are you still there?" prompt
- Click/tap to continue session

**On timeout:**
- Instance gracefully shuts down
- Credits stop consuming
- User can reconnect (new session)

## Credit Allocation by Tier

### Free Tier
- **60 credits/month**
- **Price**: $0
- **Use case**: Testing, small demos
- **Equivalent to**:
  - 60 minutes Linux streaming (1 hour)
  - 30 minutes Windows streaming
  - ~6 demo sessions at 10 min each

### Plus Tier
- **100 credits/month**
- **Price**: $20/month
- **Use case**: Small projects, client reviews
- **Equivalent to**:
  - 100 minutes Linux streaming (~1.7 hours)
  - 50 minutes Windows streaming
  - ~10 demo sessions at 10 min each

### Pro Tier
- **300 credits/month**
- **Price**: $49/month
- **Use case**: Professional presentations, regular use
- **Equivalent to**:
  - 300 minutes Linux streaming (5 hours)
  - 150 minutes Windows streaming
  - ~30 demo sessions at 10 min each

### Enterprise Tier
- **Custom credit packages**
- **Price**: Contact sales
- **Use case**: High-volume, classroom sessions, trade shows
- **Options**:
  - 1,000+ credits/month
  - Bulk discounts
  - Reserved capacity
  - Unused credits roll over (negotiable)

## Credit Packages & Top-Ups

### Monthly Allocation

Your tier includes a monthly credit allocation that **resets** on your billing date.

**Important:**
- Unused credits do NOT roll over (Free/Plus/Pro)
- Credits expire at end of billing cycle
- Enterprise can negotiate rollover terms

### Additional Credit Packs

Need more credits mid-month? Purchase add-on packs:

| Pack Size | Price | Per-Credit Cost | Best For |
|-----------|-------|-----------------|----------|
| 100 credits | $15 | $0.15/credit | Small overage |
| 500 credits | $65 | $0.13/credit | Moderate overage |
| 1,000 credits | $120 | $0.12/credit | Large events |
| 5,000+ credits | Custom | $0.10/credit | Enterprise needs |

:::info
Credit packs purchased mid-cycle do NOT expire and can be used until depleted.
:::

## Overage Handling

### What Happens When You Run Out?

**Free Tier:**
- Streams stop when credits depleted
- Must upgrade or wait for monthly reset
- No overage charges

**Plus/Pro Tiers:**
- Can enable auto-purchase of credit packs
- Or streams pause until manual top-up
- Email notification at 80%, 90%, 100% usage

**Enterprise:**
- Custom overage policies
- Pre-negotiated rates
- Dedicated account management

## Cost Optimization Strategies

### 1. Use Linux Builds

**Impact**: 50% cost reduction

```
Scenario: 100 hours of streaming per month

Windows: 100 hours × 60 min × 2 credits = 12,000 credits ($1,200+)
Linux: 100 hours × 60 min × 1 credit = 6,000 credits ($600+)

Savings: $600/month
```

### 2. Leverage Idle Timeouts

**Impact**: 20-40% cost reduction

```
Without idle timeout:
- User views for 10 minutes
- Forgets to close tab for 2 hours
- Cost: 130 minutes (130 credits)

With 2-minute idle timeout:
- User views for 10 minutes
- Auto-disconnect after 2 min idle
- Cost: 10 minutes (10 credits)

Savings: 92% on abandoned sessions
```

### 3. Batch User Sessions

**Impact**: Variable, depends on use case

**For shared experiences (classroom, presentations):**
- Multiple users connect to SAME instance
- Credits consumed per minute of instance uptime
- Not per user

```
Example: 30-student classroom, 1-hour session

Individual instances: 30 users × 60 min = 1,800 credits
Shared instance: 1 instance × 60 min = 60 credits

Savings: 1,740 credits (97% reduction!)
```

:::tip
Shared instances only available on Pro and Enterprise tiers.
:::

### 4. Use Lower Resolution for Demos

**Impact**: 10-15% bandwidth savings, same credit cost

While credits are time-based, lower resolution:
- Reduces bandwidth costs (Enterprise tier)
- Improves connection quality on slow networks
- Allows more concurrent users per instance

### 5. Schedule High-Traffic Events

**Impact**: Plan credit consumption

For trade shows, open houses, or classroom sessions:

1. **Estimate usage**:
   - Expected attendees × average session time
   - Example: 200 attendees × 5 min = 1,000 credits

2. **Purchase credit pack in advance**:
   - Avoid mid-event disruptions
   - Take advantage of bulk discounts

3. **Monitor in real-time**:
   - Dashboard shows live credit consumption
   - Adjust as needed

## Credit Usage Analytics

### Dashboard Metrics

Your dashboard provides:

**Real-Time:**
- Current credit balance
- Active sessions consuming credits
- Credits consumed today/this hour

**Historical:**
- Daily/weekly/monthly consumption graphs
- Peak usage times
- Per-project credit breakdown
- Cost trends

**Projections:**
- Estimated credits remaining at current usage
- Projected monthly total
- Upgrade recommendations

### Usage Alerts

**Set up notifications:**
- Email when 80% depleted
- SMS at 90% (Pro/Enterprise)
- Slack webhook integration (Enterprise)
- Auto-top-up triggers

## Pricing Comparison: Third Space vs AWS DIY

### AWS DIY Costs (Monthly)

**Infrastructure:**
- G6.xlarge instance: $0.75/hour × 730 hours = $547.50
- Data transfer: ~$50-100/month
- Load balancer: $20/month
- Storage: $10/month
- **Total: $627.50 - $677.50/month**

**Plus hidden costs:**
- Your time setting up (40+ hours)
- Ongoing maintenance (5-10 hours/month)
- DevOps expertise required

### Third Space Pricing (Monthly)

**Pro Tier: $99/month**
- 2,000 credits (33+ hours streaming)
- Zero setup time
- Zero maintenance
- Full support included

**Savings:**
- $528+ per month in infrastructure
- 40+ hours saved on setup
- 5-10 hours/month saved on maintenance

**Break-even:**
If you stream more than 33 hours/month consistently, Enterprise tier with reserved capacity may be more cost-effective.

## Frequently Asked Questions

### Do unused credits roll over?

**Free/Plus/Pro**: No, credits reset monthly on your billing date.

**Enterprise**: Can negotiate rollover terms for purchased credit packs.

### Can I share credits across projects?

Yes! Credits are account-wide, not per-project. Use them for any of your deployed streams.

### What if I need credits immediately?

Purchase a credit pack instantly via dashboard. Credits available within seconds.

### Can I downgrade mid-cycle?

Yes, but you'll lose access to tier-specific features immediately. Monthly credits will adjust on next billing cycle.

### Do you offer refunds on unused credits?

No, credits are non-refundable. We recommend starting with Free tier to test before upgrading.

### Can I pause my subscription?

Pro/Enterprise can pause subscription. Credits freeze during pause period. Resume anytime.

## Next Steps

- [See full pricing comparison](../pricing/plans)
- [Use the cost calculator](../pricing/cost-calculator)
- [Explore Enterprise options](../pricing/enterprise)
- [Start with free tier](../getting-started/quick-start)
