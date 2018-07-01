var packtNs = packtNS || {};
packt.Ns.common = packtNs.common || {};

packt.Ns.common.populateWithTodaysDate = function()
{
	if (Xrm.Page.getAttribute("packt_supervisor").getValue() !== null && Xrm.Page.getAttibute("packt_postgraduatestartdate").getValue() === null)
	{
		Xrm.Page.getAttribute("packt_postgraduatestartdate").setValue(new Date());
	}
}
	