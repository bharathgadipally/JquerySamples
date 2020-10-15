var getSmallestSubString = function (string1, string2) {
	const seen = {};
	const charOccurances = {};
	let left = 0,
		right = 0;
	var res;

	for (const char of string2) {
		charOccurances[char] = charOccurances[char] ? charOccurances[char] + 1 : 1;
	}

	while (!isCovered(seen, charOccurances, string2) && right < string1.length) {
		let char = string1[right];
		seen[char] = seen[char] ? seen[char] + 1 : 1;
		right++;
	}
	if (!isCovered(seen, charOccurances, string2)) {
		return "Not Found";
	}
	res = string1.substring(left, right);

	while (
		charOccurances[string1[left]] === undefined ||
		seen[string1[left]] > charOccurances[string1[left]]
	) {
		let char = string1[left];
		seen[char]--;
		left++;
	}

	const st = string1.substring(left, right);
	if (st.length < res.length) {
		res = st;
	}

	for (right; right <= string1.length; right++) {
		seen[string1[right]]++;

		while (
			charOccurances[string1[left]] === undefined ||
			seen[string1[left]] > charOccurances[string1[left]]
		) {
			let char = string1[left];
			seen[char]--;
			left++;
		}

		const substring = string1.substring(left, right + 1);
		if (substring.length < res.length) res = substring;
	}

	while (
		charOccurances[string1[right]] === undefined ||
		seen[string1[right]] > charOccurances[string1[right]]
	) {
		let char = string1[right];
		seen[char]--;
		right--;
	}
	const substring = string1.substring(left, right + 1);
	if (substring.length < res.length) res = substring;

	return res;
};

const isCovered = (seen, charOccurances, string2) => {
	for (const char of string2) {
		if (!seen[char] || seen[char] < charOccurances[char]) return false;
	}
	return true;
};

console.log(getSmallestSubString("this is a test string", "has"));

console.log(getSmallestSubString("no such window can exist", "wcn"));

console.log(getSmallestSubString("this is a test string", "node"));
