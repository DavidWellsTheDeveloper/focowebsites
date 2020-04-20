from django import forms


class ContactForm(forms.Form):
    REASONS = [
        ('information', 'Information'),
        ('design', 'Quoting New Website'),
        ('redesign', 'Quoting Website Upgrade'),
        ('consulting', 'Seeking advice & Guidance'),
        ('other', 'Other'),
    ]
    intent = forms.CharField(label='What are you looking for?',
                             widget=forms.Select(choices=REASONS))
    from_email = forms.EmailField(required=True)
    subject = forms.CharField(required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)
