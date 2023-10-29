type World = 'world';
type Greeting = `hello ${World}`;

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type AllLocaleIDs2 = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = 'en' | 'ja' | 'pt';
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs2}`;

// utility type `Uppercase`
type Greeting2 = 'Hello, world';
type ShoutyGreeting = Uppercase<Greeting2>;
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<'my_app'>;

// utility type `Lowercase`
type Greeting3 = 'Hello, world';
type QuietGreeting = Lowercase<Greeting3>;

// utility type `Capitalize`
type LowercaseGreeting = 'hello, world';
type Greeting4 = Capitalize<LowercaseGreeting>;

// utility type `Uncapitalize`
type UppercaseGreeting = 'HELLO WORLD';
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;

export {};
