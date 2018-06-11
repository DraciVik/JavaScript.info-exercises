/*
If elem – is an arbitrary DOM element node…

Is it true that elem.lastChild.nextSibling is always null?
Is it true that elem.children[0].previousSibling is always null ?
*/
// Yes, elem.lastChild is always the last one. There are no next childer.always
// No, not true. elem.children[0] represents the first element child, but there might be a textual previous child.always