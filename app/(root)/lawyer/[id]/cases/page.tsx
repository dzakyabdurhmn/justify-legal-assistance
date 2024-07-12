import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const getCases = async () => {
  const res = await fetch(`${process.env.BASE_API}/cases`);

  const data = await res.json();

  const pendingCases = data.data.filter(({ Data }: any) => {
    return Data.status === "Pending";
  });

  console.log(pendingCases.client);

  return {
    pendingCases,
  };
};

export default async function LawyerCases() {
  const { pendingCases } = await getCases();
  // const { data: session, status } = useSession();

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Case Requests</h3>
              <div className="mt-4 space-y-4">
                {pendingCases.map(({ Data }: any) => {
                  return (
                    <div className="rounded-md bg-background p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold">
                            <Link href={`/case/${Data.id}`}>
                              {Data.case_name ?? "[PLACEHOLDER CASENAME]"}
                            </Link>
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Client:{" "}
                            {Data?.client?.name ?? "[PLACEHOLDER CLIENT]"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-red-500 text-white hover:bg-red-600"
                          >
                            Reject
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {Data.case_description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-8 text-xl font-semibold">
              Ongoing Approved Cases
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-md bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">
                      <Link href={`/case/${2}`}>Merger Negotiations</Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Client: Globex Corporation
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The client is seeking legal counsel for a complex merger
                  negotiation with a competitor. The case involves extensive due
                  diligence and contract review.
                </p>
              </div>
              <div className="rounded-md bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">
                      <Link href={`/case/${2}`}>Real Estate Transaction</Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Client: Jane Doe
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The client is seeking legal representation for a complex real
                  estate transaction, including contract negotiation and
                  property title review.
                </p>
              </div>
            </div>
            <h3 className="text-xl font-semibold">Cases History</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-md bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">
                      <Link href={`/case/${2}`}>Copyright Infringement</Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Client: Acme Inc.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Closed</Badge>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The client successfully defended against a copyright
                  infringement lawsuit, securing a favorable settlement.
                </p>
              </div>
              <div className="rounded-md bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">
                      <Link href={`/case/${2}`}>Employment Dispute</Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Client: XYZ Corp.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Closed</Badge>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The client prevailed in an employment dispute, resulting in a
                  favorable outcome for the client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
