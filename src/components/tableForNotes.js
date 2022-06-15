// Create table for notes component

// Main table start
const mainTableForNotes = (content) => {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
<tbody><tr>
    <td class="bodyTitle" id="bodyText-34" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
    ${content}    
    </td>
</tr>
</tbody></table>`;
};
// Main table end

export default (content) => {
  if (content == "") {
    throw new Error("No content TableForNotes");
  }
  return mainTableForNotes(content);
};
