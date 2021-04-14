//This `ready` function lets you know whether the page is ready to work with or not.
$(function () {
	//create an object named 'linkTreeInfo' using literal notation, then add properties and methods along with their values to it.
	var linkTreeInfo = {
		handle: "@kreyolessence",
		iconLink:
			"https://cdn.shopify.com/s/files/1/1087/6916/files/about-ourstory-01.jpg?5255636394065401728",
		links: [
			{
				title: "Kreyol Essence + Shark Tank",
				link: "https://kreyolessence.com/pages/kreyol-essence-shark-tank"
			},
			{
				title: "NEW! Haitian Black Castor Oil Organic Rosemary Peppermint",
				link: ""
			},
			{
				title: "Get the glow using Natural Moringa Oil",
				link:
					"https://kreyolessence.com/blogs/beauty101/get-the-glow-using-natural-moringa-oil"
			},
			{
				title: "UBER & KREYOL ESSENCE PARTNER TO CREATE WORK IN MIAMI",
				link:
					"https://kreyolessence.com/blogs/beauty-development/uber-kreyol-essence-partner-to-create-work-in-miami"
			},
			{
				title: "‘Handsome Face & Beard’ Set",
				link: "https://kreyolessence.com/products/handsome-face-beard-set"
			},
			{
				title: "Kreyol Essence: Building An Eco-Luxury Brand with Haitian Farmers",
				link:
					"https://kreyolessence.com/blogs/beauty-development/kreyol-essence-building-an-eco-luxury-brand-with-haitian-farmers"
			},
			{
				title: "Intense Scalp + Grow Hair Care Set",
				link:
					"https://kreyolessence.com/products/intense-scalp-grow-hair-care-collection"
			},
			{
				title: "Lori's Mango Trio Set",
				link: "https://kreyolessence.com/collections/body-care/products/lori-trio"
			},
			{
				title: "Woman-led Beauty Brands Are Too Rare",
				link:
					"https://kreyolessence.com/blogs/beauty-development/woman-led-beauty-brands-are-too-rare-this-one-is-thriving-and-changing-lives-in-haiti"
			}
		],
		socialMediaLinks: [
			{
				type: "Facebook",
				link: "https://www.facebook.com/kreyolessence",
				icon: "fa fa-facebook-square fa-2x"
			},
			{
				type: "Twitter",
				link: "https://twitter.com/#!/kreyolessence",
				icon: "fa fa-twitter fa-2x"
			},
			{
				type: "Instagram",
				link: "https://www.instagram.com/kreyolessence/",
				icon: "fa fa-instagram fa-2x"
			},
			{
				type: "Youtube",
				link: "https://www.youtube.com/user/KreyolEssence",
				icon: "fa fa-youtube fa-2x"
			}
		]
	};

	var $icon = $("#linktree-img");
	var $linkTreeHandle = $("#handle");
	var $links = $("#links");
	var $socialMediaLinks = $("#social-media-links");

	//Update the content of the page with data from the object(s)
	$icon.attr("src", linkTreeInfo.iconLink);
	$linkTreeHandle.html(linkTreeInfo.handle);

	for (i = 0; i < linkTreeInfo.links.length; i++) {
		var $newItem = $(
			`<li><a target='_blank'
      href="${linkTreeInfo.links[i].link}">${linkTreeInfo.links[i].title}</a></li>`
		);

		$links.append($newItem);
	}
	for (i = 0; i < linkTreeInfo.socialMediaLinks.length; i++) {
		var $newItem = $(
			`<li><a target='_blank' 
      href="${linkTreeInfo.socialMediaLinks[i].link}"
      class="${linkTreeInfo.socialMediaLinks[i].icon}"></a></li>`
		);

		$socialMediaLinks.append($newItem);
	}
});
