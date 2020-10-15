var getSmallestSubString = function (s, t) {
	const seen = {};
	const charOccurances = {};
	let left = 0,
		right = 0;
	var res;

	for (const char of t) {
		charOccurances[char] = charOccurances[char] ? charOccurances[char] + 1 : 1;
	}

	while (!isCovered(seen, charOccurances, t) && right < s.length) {
		let char = s[right];
		seen[char] = seen[char] ? seen[char] + 1 : 1;
		right++;
	}
	if (!isCovered(seen, charOccurances, t)) {
		return "Not Found";
	}
	res = s.substring(left, right);

	while (
		charOccurances[s[left]] === undefined ||
		seen[s[left]] > charOccurances[s[left]]
	) {
		let char = s[left];
		seen[char]--;
		left++;
	}

	const st = s.substring(left, right);
	if (st.length < res.length) res = st;

	for (right; right <= s.length; right++) {
		seen[s[right]]++;

		while (
			charOccurances[s[left]] === undefined ||
			seen[s[left]] > charOccurances[s[left]]
		) {
			let char = s[left];
			seen[char]--;
			left++;
		}

		const substring = s.substring(left, right + 1);
		if (substring.length < res.length) res = substring;
	}

	while (
		charOccurances[s[right]] === undefined ||
		seen[s[right]] > charOccurances[s[right]]
	) {
		let char = s[right];
		seen[char]--;
		right--;
	}
	const substring = s.substring(left, right + 1);
	if (substring.length < res.length) res = substring;

	return res;
};

const isCovered = (seen, charOccurances, t) => {
	for (const char of t) {
		if (!seen[char] || seen[char] < charOccurances[char]) return false;
	}
	return true;
};

console.log(getSmallestSubString("this is a test string", "has"));

console.log(getSmallestSubString("no such window can exist", "wcn"));

console.log(getSmallestSubString("this is a test string", "node"));
