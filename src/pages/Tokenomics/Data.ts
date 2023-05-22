interface DataItem {
    header: string;
    content: string;
}

interface OptionItem {
    percentage: number;
    amount: string;
    title: string;
}
export const Data: DataItem[] = [
    {
        header: 'Private Sale:',
        content: '10% initially; other funds will be locked for 6 months'
    },
    {
        header: 'Public Sale:',
        content: 'No lockup or vesting period. Platform TBA'
    },
    {
        header: 'Ecosystem & Treasury:',
        content: '12-month-lock period; after that, 10% of the initial funds will be distributed monthly.'
    },
    {
        header: 'Staking & Liquidity:',
        content: 'Staking & Liquidity (DEX / CEX).'
    },
    {
        header: 'Team:',
        content: '12-month-lock period; after that, 10% of the initial funds will be distributed monthly.'
    },
    {
        header: 'In-game rewards:',
        content: 'TOP tokens can be obtained from Loot and Mystery boxes as rewards. No lockup period; 5% monthly distribution.'
    },
    {
        header: 'Strategic Partnerships:',
        content: '3 months lock, then 10% monthly'
    },
    {
        header: 'Community & Ambassadors:',
        content: '3 months lock, then 10% monthly.'
    },
    {
        header: 'Marketing:',
        content: '6 months lock, then 20% monthly'
    },
    {
        header: 'Development:',
        content: '6 months lock, then 20% monthly'
    },
]

export const Options: OptionItem[] = [
    {
        percentage: 12.5,
        amount: '375,000,000',
        title: 'Private sale'
    },
    {
        percentage: 5.5,
        amount: '165,000,000',
        title: 'Public sale'
    },
    {
        percentage: 14,
        amount: '420,000,000',
        title: 'Ecosystem & Treasury'
    },
    {
        percentage: 18,
        amount: '540,000,000',
        title: 'Staking & Liquidity'
    },
    {
        percentage: 10,
        amount: '300,000,000',
        title: 'Team'
    },
    {
        percentage: 20,
        amount: '600,000,000',
        title: 'In-game rewards'
    },
    {
        percentage: 6,
        amount: '180,000,000',
        title: 'Strategic partnerships'
    },
    {
        percentage: 2,
        amount: '60,000,000',
        title: 'Community & Ambassadors'
    },
    {
        percentage: 6,
        amount: '180,000,000',
        title: 'Marketing'
    },
    {
        percentage: 6,
        amount: '180,000,000',
        title: 'Development'
    },
]
