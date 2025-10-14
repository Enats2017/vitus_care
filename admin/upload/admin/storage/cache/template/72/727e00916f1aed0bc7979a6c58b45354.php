<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* common/dashboard.twig */
class __TwigTemplate_ec23de883cc4b22a642fc70ac9725d0d extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo ($context["header"] ?? null);
        echo ($context["column_left"] ?? null);
        echo "
<div id=\"content\">
  <div class=\"page-header\">
    <div class=\"container-fluid\">
      <!-- <div class=\"pull-right\">
        <button type=\"button\" id=\"button-developer\" title=\"";
        // line 6
        echo ($context["button_developer"] ?? null);
        echo "\" data-loading-text=\"";
        echo ($context["text_loading"] ?? null);
        echo "\" class=\"btn btn-info\"><i class=\"fa fa-cog\"></i></button>
      </div> -->
      <h1>Welcome Vituscare</h1>
      <!-- <h1>";
        // line 9
        echo ($context["heading_title"] ?? null);
        echo "</h1>
      <ul class=\"breadcrumb\">
        ";
        // line 11
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["breadcrumbs"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["breadcrumb"]) {
            // line 12
            echo "        <li><a href=\"";
            echo twig_get_attribute($this->env, $this->source, $context["breadcrumb"], "href", [], "any", false, false, false, 12);
            echo "\">";
            echo twig_get_attribute($this->env, $this->source, $context["breadcrumb"], "text", [], "any", false, false, false, 12);
            echo "</a></li>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['breadcrumb'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "      </ul>
    </div>
  </div>
  <div class=\"container-fluid\">";
        // line 17
        if (($context["error_install"] ?? null)) {
            // line 18
            echo "    <div class=\"alert alert-danger alert-dismissible\">
      <button type=\"button\" class=\"close pull-right\" data-dismiss=\"alert\">&times;</button>
      <i class=\"fa fa-exclamation-circle\"></i> ";
            // line 20
            echo ($context["error_install"] ?? null);
            echo "</div>
    ";
        }
        // line 22
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 23
            echo "    <div class=\"row\">";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($context["row"]);
            foreach ($context['_seq'] as $context["_key"] => $context["dashboard_1"]) {
                // line 24
                echo "      ";
                $context["class"] = twig_sprintf("col-lg-%s %s", twig_get_attribute($this->env, $this->source, $context["dashboard_1"], "width", [], "any", false, false, false, 24), "col-md-3 col-sm-6");
                // line 25
                echo "      ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($context["row"]);
                foreach ($context['_seq'] as $context["_key"] => $context["dashboard_2"]) {
                    // line 26
                    echo "      ";
                    if ((twig_get_attribute($this->env, $this->source, $context["dashboard_2"], "width", [], "any", false, false, false, 26) > 3)) {
                        // line 27
                        echo "      ";
                        $context["class"] = twig_sprintf("col-lg-%s %s", twig_get_attribute($this->env, $this->source, $context["dashboard_1"], "width", [], "any", false, false, false, 27), "col-md-12 col-sm-12");
                        // line 28
                        echo "      ";
                    }
                    // line 29
                    echo "      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dashboard_2'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 30
                echo "      <div class=\"";
                echo ($context["class"] ?? null);
                echo "\">";
                echo twig_get_attribute($this->env, $this->source, $context["dashboard_1"], "output", [], "any", false, false, false, 30);
                echo "</div>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dashboard_1'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 31
            echo "</div>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 32
        echo "</div>
    ";
        // line 33
        echo ($context["security"] ?? null);
        echo " -->
  <!-- <script type=\"text/javascript\">
\$('#button-developer').on('click', function() {
\t\$.ajax({
\t\turl: 'index.php?route=common/developer&user_token=";
        // line 37
        echo ($context["user_token"] ?? null);
        echo "',
\t\tdataType: 'html',
\t\tbeforeSend: function() {
\t\t\t\$('#button-developer').button('loading');
\t\t},
\t\tcomplete: function() {
\t\t\t\$('#button-developer').button('reset');
\t\t},
\t\tsuccess: function(html) {
\t\t\t\$('#modal-developer').remove();
\t\t\t
\t\t\t\$('body').prepend('<div id=\"modal-developer\" class=\"modal\">' + html + '</div>');
\t\t\t
\t\t\t\$('#modal-developer').modal('show');
\t\t},
\t\terror: function(xhr, ajaxOptions, thrownError) {
\t\t\talert(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);
\t\t}
\t});\t
});\t
</script> 
</div> -->
";
        // line 59
        echo ($context["footer"] ?? null);
    }

    public function getTemplateName()
    {
        return "common/dashboard.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  176 => 59,  151 => 37,  144 => 33,  141 => 32,  134 => 31,  123 => 30,  117 => 29,  114 => 28,  111 => 27,  108 => 26,  103 => 25,  100 => 24,  95 => 23,  90 => 22,  85 => 20,  81 => 18,  79 => 17,  74 => 14,  63 => 12,  59 => 11,  54 => 9,  46 => 6,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "common/dashboard.twig", "");
    }
}
