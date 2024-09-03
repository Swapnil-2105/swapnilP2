document.addEventListener('DOMContentLoaded', function () {
    const tagSelect = document.getElementById('tagSelect');
    const inputText = document.getElementById('inputText');
    const output = document.getElementById('output');
    const explanation = document.getElementById('explanation');

    const tagDescriptions = {
        'ul': 'UL <UL> Tag defines an unordered list. Each item in the list is marked with a bullet point.',
        'ol': 'OL <OL> Tag defines an ordered list. Each item in the list is marked with a number or letter.',
        'table': 'TABLE <TABLE> Tag defines a table. It is used to present data in rows and columns.',
        'tr': 'TR <TR> Tag defines a row in a table.',
        'td': 'TD <TD> Tag defines a cell in a table row. It is used to display data.',
        'th': 'TH <TH> Tag defines a header cell in a table. It is used to label columns or rows.',
        'br': 'BR <BR> Tag inserts a line break. It is used to separate text into lines.',
        'hr': 'HR <HR> Tag creates a horizontal line. It is used to separate content or sections.',
        'code': 'CODE <CODE> tag defines a single line of code. It is typically used to show programming code.',
        'pre': 'PRE <PRE> tag defines preformatted text. Text within this tag is displayed in a fixed-width font and preserves whitespace.',
        'h1': 'H1 <H1> Tag defines the largest heading. It is used for main titles or headings.',
        'h2': 'H2 <H2> Tag defines a second-level heading. It is used for subheadings.',
        'h3': 'H3 <H3> Tag defines a third-level heading. It is used for sub-sections.',
        'h4': 'H4 <H4> Tag defines a fourth-level heading. It is used for smaller sub-sections.',
        'p': 'P <P> Tag defines a paragraph. It is used to group sentences and text into blocks.',
        'strong': 'STRONG <STRONG> Tag defines important text. It is usually displayed in bold.',
        'em': 'EM <EM> Tag defines emphasized text. It is usually displayed in italics.',
        'a': 'A <A> Tag defines a hyperlink. It is used to link to other web pages or resources.',
        'li': 'LI <LI> Tag defines a list item. It is used within <UL> or <OL> tags.',
    };

    function updateOutput() {
        const selectedTag = tagSelect.value;
        const text = inputText.value.trim();
        let content = '';

        // Split input text into multiple words if there are spaces
        const words = text ? text.split(/\s+/) : ['Sample'];

        switch (selectedTag) {
            case 'ul':
                // Create an unordered list with each word as a list item
                content = '<ul>';
                words.forEach(word => content += `<li>${word}</li>`);
                content += '</ul>';
                break;
            case 'ol':
                // Create an ordered list with each word as a list item
                content = '<ol>';
                words.forEach(word => content += `<li>${word}</li>`);
                content += '</ol>';
                break;
            case 'table':
                // Create a table with each pair of words as a row
                content = '<table border="1" cellpadding="5" cellspacing="0">';
                content += '<tr><th>Header 1</th><th>Header 2</th></tr>';
                for (let i = 0; i < words.length; i += 2) {
                    content += '<tr>';
                    content += `<td>${words[i] || ''}</td>`;
                    content += `<td>${words[i + 1] || ''}</td>`;
                    content += '</tr>';
                }
                content += '</table>';
                break;
            default:
                // Create a default HTML tag
                content = `<${selectedTag}>${text}</${selectedTag}>`;
        }

        output.innerHTML = content;
        explanation.textContent = tagDescriptions[selectedTag] || 'Description not available.';
    }

    function clearFields() {
        // Clear input text, output, explanation, and reset dropdown to default
        inputText.value = '';
        output.innerHTML = '';
        explanation.textContent = '';
        tagSelect.selectedIndex = 0; // Reset to the first option (default)
    }

    tagSelect.addEventListener('change', updateOutput);
    inputText.addEventListener('input', updateOutput);

    // Initialize with default values
    updateOutput();
});
