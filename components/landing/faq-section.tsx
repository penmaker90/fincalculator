import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to create an account?",
    answer:
      "No. Both calculators run entirely in your browser, so there is nothing to sign up for and no financial details to hand over.",
  },
  {
    question: "How accurate is the mortgage calculator?",
    answer:
      "It uses the standard amortisation formula, so the monthly payment matches what a lender quotes for a standard amortising loan. Taxes, insurance, fees and offset accounts are not included in the headline payment.",
  },
  {
    question: "Does the compound interest calculator really compound?",
    answer:
      "Yes. Interest is applied every compounding period and each contribution is added at the end of its period, so the growth curve reflects what a real monthly deposit earns rather than a flat multiple.",
  },
  {
    question: "Can I model extra mortgage payments?",
    answer:
      "Yes. Add a lump sum or an extra monthly amount and the payoff date and total interest are recalculated against it — on the sample loan, $200 extra a month clears the debt six years early and saves $101,994.",
  },
  {
    question: "What happens if I change the interest rate?",
    answer:
      "Every figure is recalculated from scratch. The payment schedule, the total interest and the payoff date all move together, so you can compare two rates side by side.",
  },
  {
    question: "Is FinCalc financial advice?",
    answer:
      "No. These are estimates for planning and comparison. Always confirm your final figures with a lender or a licensed financial adviser before you commit to anything.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-b py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Questions people ask first
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            How the numbers are worked out, what is included, and what is not.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-12 w-full max-w-3xl"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
